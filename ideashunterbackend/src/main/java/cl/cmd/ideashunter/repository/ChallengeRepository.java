package cl.cmd.ideashunter.repository;

import cl.cmd.ideashunter.models.Challenge;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface ChallengeRepository extends MongoRepository<Challenge,String> {
}
