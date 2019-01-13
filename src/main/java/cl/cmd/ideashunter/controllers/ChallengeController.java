package cl.cmd.ideashunter.controllers;

import cl.cmd.ideashunter.models.Challenge;
import cl.cmd.ideashunter.repositories.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ChallengeController {
    @Autowired
    ChallengeRepository challengeRepository;

    @RequestMapping(method = RequestMethod.GET, value="/challenges")
    public Iterable<Challenge> challenge() {
        return challengeRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/challenges")
    public Challenge save(@RequestBody Challenge challenge) {
        challengeRepository.save(challenge);

        return challenge;
    }

    @RequestMapping(method=RequestMethod.GET, value="/challenges/{id}")
    public Optional<Challenge> show(@PathVariable String id) {
        return challengeRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/challenges/{id}")
    public Challenge update(@PathVariable String id, @RequestBody Challenge challenge) {
        Optional<Challenge> optionalChallenge = challengeRepository.findById(id);
        Challenge c = optionalChallenge.get();
        if(challenge.getId() != null)
            c.setId(challenge.getId());
        if(challenge.getTitle() != null)
            c.setTitle(challenge.getTitle());
        if(challenge.getDescription() != null)
            c.setDescription(challenge.getDescription());
        if(challenge.getCategory() != null)
            c.setCategory(challenge.getCategory());
        if(challenge.getStartDate() != null)
            c.setStartDate(challenge.getStartDate());
        if(challenge.getFinishDate() != null)
            c.setFinishDate(challenge.getFinishDate());
        challengeRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/challenges/{id}")
    public String delete(@PathVariable String id) {
        Optional<Challenge> optionalChallenge = challengeRepository.findById(id);
        Challenge idea = optionalChallenge.get();
        challengeRepository.delete(idea);

        return "";
    }
}
