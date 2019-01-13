package cl.cmd.ideashunter.controllers;

import cl.cmd.ideashunter.models.User;
import cl.cmd.ideashunter.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, value="/users")
    public Iterable<User> user() {
        return userRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value="/users")
    public User save(@RequestBody User user) {
        userRepository.save(user);

        return user;
    }

    @RequestMapping(method = RequestMethod.GET, value="/users/{id}")
    public Optional<User> show(@PathVariable String id) {
        return userRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/users/{id}")
    public User update(@PathVariable String id, @RequestBody User user) {
        Optional<User> optionalUser = userRepository.findById(id);
        User u = optionalUser.get();
        if(user.getId() != null)
            u.setId(user.getId());
        if(user.getUserName() != null)
            u.setUserName(user.getUserName());
        if(user.getPassword() != null)
            u.setPassword(user.getPassword());
        if(user.getEmail() != null)
            u.setEmail(user.getEmail());
        if(user.getUserType() != null)
            u.setUserType(user.getUserType());
        if(user.getCreationDate() != null)
            u.setCreationDate(user.getCreationDate());
        userRepository.save(u);
        return u;
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/users/{id}")
    public String delete(@PathVariable String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.get();
        userRepository.delete(user);

        return "";
    }


}
