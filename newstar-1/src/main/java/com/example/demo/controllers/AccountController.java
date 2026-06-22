package com.example.demo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import java.io.ByteArrayOutputStream;
import java.util.List;
import com.example.demo.dtos.DepositRequest;
import com.example.demo.dtos.TransferRequest;
import com.example.demo.dtos.WithdrawRequest;
import com.example.demo.entityc.TrasactionEntity;
import com.example.demo.services.AccountService;
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
    
    @GetMapping("/transactions")
    public List<TrasactionEntity> getTrasactions(){
    	return accountService.getAllTrasactions();
    }
    
    @GetMapping("/statement/pdf")
    public ResponseEntity<byte[]> downloadPdf() throws Exception {

        ByteArrayOutputStream out = new ByteArrayOutputStream();

        Document document = new Document();

        PdfWriter.getInstance(document, out);

        document.open();

        document.add(new Paragraph("HDFC BANK"));
        document.add(new Paragraph("Account Statement"));
        document.add(new Paragraph(" "));

        document.add(new Paragraph("Account Number : 1001"));
        document.add(new Paragraph("Balance : ₹1500"));

        document.close();

        HttpHeaders headers = new HttpHeaders();

        headers.add(
            "Content-Disposition",
            "attachment; filename=statement.pdf"
        );

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(out.toByteArray());
    }
    
//    @GetMapping("/details/{accountNumber}")
//    public AccountEntity getAccountDetails(@PathVariable String accountNumber) {
//        return accountService.getAccountDetails(accountNumber);
//    }

    @PostMapping("/deposit")
    public String deposit(@RequestBody DepositRequest request) {
        return accountService.deposit(request);
    }

    @PostMapping("/withdraw")
    public String withdraw(@RequestBody WithdrawRequest request) {
        return accountService.withdraw(request);
    }

    @PostMapping("/transfer")
    public String transfer(@RequestBody TransferRequest request) {
        return accountService.transfer(request);
    }
}