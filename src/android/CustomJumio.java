package com.stratpoint.cordova.plugin;
// The native Toast API
import android.widget.Toast;

// Modification Start
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.util.Log;
// Modification End

//Jumio Imports
import com.jumio.MobileSDK;
import com.jumio.bam.*
import com.jumio.bam.enums.CreditCardType;
import com.jumio.core.enums.*;
import com.jumio.core.exceptions.*;
import com.jumio.dv.DocumentVerificationSDK;
import com.jumio.nv.*
import com.jumio.nv.data.document.*;
import com.jumio.sdk.SDKExpiredException;
//Jumio Imports End

// Cordova Imports
import org.apache.cordova.*;
import org.apache.cordova.PluginResult.Status;
import org.json.*;
import java.util.*;


// Cordova-required packages (Original)
// import org.apache.cordova.CallbackContext;
// import org.apache.cordova.CordovaPlugin;
// import org.apache.cordova.PluginResult;
// import org.json.JSONArray;
// import org.json.JSONException;
// import org.json.JSONObject;



public class CustomJumio extends CordovaPlugin {
  private static final String DURATION_LONG = "long";
  @Override
  public boolean execute(String action, JSONArray args,
    final CallbackContext callbackContext) {
      // Verify that the user sent a 'show' action
      if (!action.equals("show")) {
        callbackContext.error("\"" + action + "\" is not a recognized action.");
        return false;
      }
      String message;
      String duration;
      try {
        JSONObject options = args.getJSONObject(0);
        message = options.getString("message");
        duration = options.getString("duration");
      } catch (JSONException e) {
        callbackContext.error("Error encountered: " + e.getMessage());
        return false;
      }
      // Create the toast
      Toast toast = Toast.makeText(cordova.getActivity(), message,
        DURATION_LONG.equals(duration) ? Toast.LENGTH_LONG : Toast.LENGTH_SHORT);
      // Display toast
      toast.show();
      // Send a positive result to the callbackContext
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
      callbackContext.sendPluginResult(pluginResult);
      return true;
  }
}