package com.supremecorp.reactandspringdatarest;

import com.supremecorp.reactandspringdatarest.domains.Employee;
import com.supremecorp.reactandspringdatarest.repositories.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DatabaseLoader implements CommandLineRunner {
    private final EmployeeRepository repository;

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
    }
}
