package com.example.demo.kafka;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/kafka")
public class KafkaController {

    private final TransactionProducer producer;

    public KafkaController(
            TransactionProducer producer) {

        this.producer = producer;
    }

    @PostMapping("/send")
    public String send(
            @RequestParam String msg) {

        producer.sendMessage(msg);

        return "Message Sent Successfully";
    }
}