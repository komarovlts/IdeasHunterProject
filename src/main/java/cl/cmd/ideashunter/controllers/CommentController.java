package cl.cmd.ideashunter.controllers;

import cl.cmd.ideashunter.models.Comment;
import cl.cmd.ideashunter.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @RequestMapping(method = RequestMethod.GET, value="/comments")
    public Iterable<Comment> comment() {
        return commentRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value="/comments")
    public Comment save(@RequestBody Comment comment) {
        commentRepository.save(comment);

        return comment;
    }

    @RequestMapping(method = RequestMethod.GET, value="/comments/{id}")
    public Optional<Comment> show(@PathVariable String id) {
        return commentRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/comments/{id}")
    public Comment update(@PathVariable String id, @RequestBody Comment comment) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        Comment c = optionalComment.get();
        if(comment.getId() != null)
            c.setId(comment.getId());
        if(comment.getIdUser() != null)
            c.setIdUser(comment.getIdUser());
        if(comment.getComment() != null)
            c.setComment(comment.getComment());
        if(comment.getCreationDate() != null)
            c.setCreationDate(comment.getCreationDate());
        commentRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/comments/{id}")
    public String delete(@PathVariable String id) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        Comment comment = optionalComment.get();
        commentRepository.delete(comment);

        return "";
    }
}
