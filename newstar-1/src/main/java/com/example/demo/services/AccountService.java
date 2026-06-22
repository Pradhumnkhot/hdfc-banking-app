package com.example.demo.services;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import com.example.demo.dtos.DepositRequest;
import com.example.demo.dtos.TransferRequest;
import com.example.demo.dtos.WithdrawRequest;
import com.example.demo.entityc.AccountEntity;
import com.example.demo.entityc.TrasactionEntity;
import com.example.demo.repositorys.AccountRepository;
import com.example.demo.repositorys.TrasactionRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AccountService {

    private final AccountRepository accountRepository;
    private final TrasactionRepository trasactionRepository;

    public AccountService(AccountRepository accountRepository,
                          TrasactionRepository trasactionRepository) {
        this.accountRepository = accountRepository;
        this.trasactionRepository = trasactionRepository;
    }

    public String deposit(DepositRequest request) {

        AccountEntity account = accountRepository
                .findByAccountNumber(request.getAccountNumber())
                .orElseThrow(() -> new RuntimeException("Account not found"));

        account.setBalance(account.getBalance() + request.getAmount());

        accountRepository.save(account);

        TrasactionEntity transaction = new TrasactionEntity();
        transaction.setTrasactionId(UUID.randomUUID().toString());
        transaction.setTrasactionType("DEPOSIT");
        transaction.setAmount(request.getAmount());
        transaction.setToAccount(account.getAccountNumber());
        transaction.setTrasactionTime(LocalDate.now());
        transaction.setRemarks("Cash Deposit");

        trasactionRepository.save(transaction);

        return "Amount Deposited Successfully";
    }

    public String withdraw(WithdrawRequest request) {

        AccountEntity account = accountRepository
                .findByAccountNumber(request.getAccountNumber())
                .orElseThrow(() -> new RuntimeException("Account not found"));

        if (account.getBalance() < request.getAmount()) {
            throw new RuntimeException("Insufficient Balance");
        }

        account.setBalance(account.getBalance() - request.getAmount());

        accountRepository.save(account);

        TrasactionEntity transaction = new TrasactionEntity();
        transaction.setTrasactionId(UUID.randomUUID().toString());
        transaction.setTrasactionType("WITHDRAW");
        transaction.setAmount(request.getAmount());
        transaction.setFromAccount(account.getAccountNumber());
        transaction.setTrasactionTime(LocalDate.now());
        transaction.setRemarks("Cash Withdraw");

        trasactionRepository.save(transaction);

        return "Amount Withdrawn Successfully";
    }

    public String transfer(TransferRequest request) {

        AccountEntity fromAccount = accountRepository
                .findByAccountNumber(request.getFromAccount())
                .orElseThrow(() -> new RuntimeException("Sender Account not found"));

        AccountEntity toAccount = accountRepository
                .findByAccountNumber(request.getToAccount())
                .orElseThrow(() -> new RuntimeException("Receiver Account not found"));

        if (fromAccount.getBalance() < request.getAmount()) {
            throw new RuntimeException("Insufficient Balance");
        }

        fromAccount.setBalance(fromAccount.getBalance() - request.getAmount());
        toAccount.setBalance(toAccount.getBalance() + request.getAmount());

        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        TrasactionEntity transaction = new TrasactionEntity();
        transaction.setTrasactionId(UUID.randomUUID().toString());
        transaction.setTrasactionType("TRANSFER");
        transaction.setAmount(request.getAmount());
        transaction.setFromAccount(fromAccount.getAccountNumber());
        transaction.setToAccount(toAccount.getAccountNumber());
        transaction.setTrasactionTime(LocalDate.now());
        transaction.setRemarks("Fund Transfer");

        trasactionRepository.save(transaction);

        return "Amount Transferred Successfully";
    }
    
    public List<TrasactionEntity> getAllTrasactions(){
    	return trasactionRepository.findAll();
    }
    
//    public AccountEntity getAccountDetails(String accountNumber) {
//    	return accountRepository.findByAccountNumber(accountNumber)
//    			.orElseThrow(() -> new RuntimeException("Account Not Found"));
//    }
}