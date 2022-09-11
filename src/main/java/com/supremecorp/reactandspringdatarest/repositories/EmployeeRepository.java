package com.supremecorp.reactandspringdatarest.repositories;

import com.supremecorp.reactandspringdatarest.domains.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
