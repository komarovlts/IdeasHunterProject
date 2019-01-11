package cl.cmd.ideashunter.models;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(value = "idea")
public class Idea {
    @Id
    private ObjectId id;
    private String[] coments; // Revisar esto, puede que haya que hacer un modelo para esto.
    private String description;
    private String category;
    private String valuation;
    private Date date;

    public Idea() {
    }

    public Idea(String description, String category, Date date) {
        this.description = description;
        this.category = category;
        this.date = date;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String[] getComents() {
        return coments;
    }

    public void setComents(String[] coments) {
        this.coments = coments;
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

    public String getValuation() {
        return valuation;
    }

    public void setValuation(String valuation) {
        this.valuation = valuation;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
