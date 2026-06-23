package com.example.demo.kafka;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class TransactionConsumer {

    @KafkaListener(
            topics = "transaction-topic",
            groupId = "transaction-group")
    public void consume(String message) {

        System.out.println(
                "Received Message : " + message);
    }
}