package com.appdeveloperblog.app.ws.mobileappws.shared;

import java.util.UUID;

public class Utils {

    public String generatUserId(){
        return UUID.randomUUID().toString();
    }

}
