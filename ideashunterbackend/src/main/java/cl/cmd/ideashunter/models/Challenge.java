package cl.cmd.ideashunter.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(value = "challenge")
public class Challenge {
    @Id
    private ObjectId id;
    private String title;
    private String description;
    private String category;
    private Date startDate;
    private Date finishDate;
    @DBRef
    private List<Idea> ideas;

    public Challenge() {
    }

    public Challenge(String title, String description, String category, Date startDate, Date finishDate) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.startDate = startDate;
        this.finishDate = finishDate;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public List<Idea> getIdeas() {
        return ideas;
    }

    public void setIdeas(List<Idea> Ideas) {
        this.ideas = Ideas;
    }
}
