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
import org.json.JSONException;

public class ApiGetTransaction extends HttpServlet{
    private static final long serialVersionUID = 1L;

  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("application/json");
      HttpClient httpClient = HttpClient.newBuilder().build();
      PrintWriter out = response.getWriter();
      String paramValue = "https://blockchain.info/rawtx/"+request.getParameter("hash");
        try {
            HttpRequest requestX = HttpRequest.newBuilder(new URI(paramValue))
                .GET().build();
            HttpResponse<String> responseX = httpClient.send(requestX, HttpResponse.BodyHandlers.ofString());
            String str = "[" + responseX.body() + "]";
            out.println(str);
        } catch(JSONException e){
            out.println("{\"error\": \"JSONException in ApiGetTransaction\" }");
            e.printStackTrace();
        } catch (URISyntaxException e) {
            out.println("{\"error\": \"URISyntaxException in ApiGetTransaction\" }");
            e.printStackTrace();
        } catch (IOException e) {
            out.println("{\"error\": \"IOException in ApiGetTransaction\" }");
            e.printStackTrace();
        } catch (InterruptedException e) {
            out.println("{\"error\": \"InterruptedException in ApiGetTransaction\" }");
            e.printStackTrace();
        };
   }
    
}
