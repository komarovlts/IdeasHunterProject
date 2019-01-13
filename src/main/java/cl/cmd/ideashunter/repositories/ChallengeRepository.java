package cl.cmd.ideashunter.repositories;

import cl.cmd.ideashunter.models.Challenge;
import org.springframework.data.repository.CrudRepository;

public interface ChallengeRepository extends CrudRepository<Challenge, String> {
    @Override
    void delete(Challenge deleted);
}
