package com.supremecorp.reactandspringdatarest.repositories;

import com.supremecorp.reactandspringdatarest.domains.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
