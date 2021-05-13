package com.blockchain;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ApiGetBlock extends HttpServlet{
    private static final long serialVersionUID = 1L;

  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("application/json");
      HttpClient httpClient = HttpClient.newBuilder().build();
      PrintWriter out = response.getWriter();
        try {
            HttpRequest requestX = HttpRequest.newBuilder(new URI("https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103"))
                .GET().build();
            HttpResponse<String> responseX = httpClient.send(requestX, HttpResponse.BodyHandlers.ofString());
            String str = "[" + responseX.body() + "]";
            out.println(str);
        } catch(JSONException e){
            out.println("{\"error\": \"JSONException in ApiGetBlock\" }");
            e.printStackTrace();
        } catch (URISyntaxException e) {
            out.println("{\"error\": \"URISyntaxException in ApiGetBlock\" }");
            e.printStackTrace();
        } catch (IOException e) {
            out.println("{\"error\": \"IOException in ApiGetBlock\" }");
            e.printStackTrace();
        } catch (InterruptedException e) {
            out.println("{\"error\": \"InterruptedException in ApiGetBlock\" }");
            e.printStackTrace();
        };
   }
    
}
