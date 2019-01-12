package cl.cmd.ideashunter.controllers;

import cl.cmd.ideashunter.models.Idea;
import cl.cmd.ideashunter.repositories.IdeaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class IdeaController {

    @Autowired
    IdeaRepository ideaRepository;

    @RequestMapping(method = RequestMethod.GET, value="/ideas")
    public Iterable<Idea> idea() {
        return ideaRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/ideas")
    public Idea save(@RequestBody Idea idea) {
        ideaRepository.save(idea);

        return idea;
    }

    @RequestMapping(method=RequestMethod.GET, value="/ideas/{id}")
    public Optional<Idea> show(@PathVariable String id) {
        return ideaRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/ideas/{id}")
    public Idea update(@PathVariable String id, @RequestBody Idea idea) {
        Optional<Idea> optionalIdea = ideaRepository.findById(id);
        Idea i = optionalIdea.get();
        if(idea.getId() != null)
            i.setId(idea.getId());
        if(idea.getTitle() != null)
            i.setTitle(idea.getTitle());
        if(idea.getDescription() != null)
            i.setDescription(idea.getDescription());
        if(idea.getCategory() != null)
            i.setCategory(idea.getCategory());
        if(idea.getValuation() != null)
            i.setValuation(idea.getValuation());
        if(idea.getDate() != null)
            i.setDate(idea.getDate());
        ideaRepository.save(i);
        return i;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/ideas/{id}")
    public String delete(@PathVariable String id) {
        Optional<Idea> optionalIdea = ideaRepository.findById(id);
        Idea idea = optionalIdea.get();
        ideaRepository.delete(idea);

        return "";
    }
}