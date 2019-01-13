package cl.cmd.ideashunter.repositories;


import cl.cmd.ideashunter.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    @Override
    void delete(User deleted);
}
