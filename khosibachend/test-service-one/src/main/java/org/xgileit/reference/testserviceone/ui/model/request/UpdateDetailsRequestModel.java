package org.xgileit.reference.testserviceone.ui.model.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UpdateDetailsRequestModel {

    @NotNull(message = "first name cannot be null")
    @Size(min = 2,message = "first name must not be less than 2 characters")
    private String firstName;

    @NotNull(message = "last name cannot be null")
    @Size(min = 2,message = "last name must not be less than 2 characters")
    private String lastName;

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
