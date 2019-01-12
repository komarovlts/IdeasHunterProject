package cl.cmd.ideashunter.repositories;

import cl.cmd.ideashunter.models.Idea;
import org.springframework.data.repository.CrudRepository;

public interface IdeaRepository extends CrudRepository<Idea, String> {
    @Override
    void delete(Idea deleted);
}