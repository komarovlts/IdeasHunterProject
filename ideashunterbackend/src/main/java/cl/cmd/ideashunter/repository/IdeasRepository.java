package cl.cmd.ideashunter.repository;

import cl.cmd.ideashunter.models.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface IdeasRepository extends MongoRepository<Idea, String> {
}
