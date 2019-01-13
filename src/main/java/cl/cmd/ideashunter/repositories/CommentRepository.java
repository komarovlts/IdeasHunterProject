package cl.cmd.ideashunter.repositories;

import cl.cmd.ideashunter.models.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, String> {
    @Override
    void delete(Comment deleted);
}
