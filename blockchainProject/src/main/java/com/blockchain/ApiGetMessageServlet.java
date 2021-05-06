package com.blockchain;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;

public class ApiGetMessageServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;

  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("application/json");
      HttpClient httpClient = HttpClient.newBuilder().build();
      HttpRequest requestx;
      try {
         PrintWriter out = response.getWriter();
         requestx = HttpRequest.newBuilder(new URI("https://rest.coinapi.io/v1/exchangerate/BTC/USD"))
            .headers("X-CoinAPI-Key", "3707CA9C-9195-4C2C-925D-64E49EA413B6").GET().build();
            HttpResponse<String> responsex = httpClient.send(requestx, HttpResponse.BodyHandlers.ofString());
            String str = "[" + responsex.body() + "]";
            // print response body
            //out.println(responsex.body());
            JSONArray array = new JSONArray(str);
            JSONObject object = array.getJSONObject(0);
            double money = object.getDouble("rate");
            out.println("{ \"BTC/USD\": \""+money+" \" }");

            Connection con = null;
            Class.forName("com.mysql.jdbc.Driver"); 
            con = DriverManager.getConnection("jdbc:mysql://192.168.194.200:3306/PIK?"
                + "useLegacyDatetimeCode=false&serverTimezone=UTC&" + "user=root&password=nowehaslo");
            PreparedStatement stmt = con.prepareStatement("INSERT INTO USDBTC (USD) VALUES(?)");
            stmt.setDouble(1,money);
            //stmt.setNull(2,java.sql.Types.TIMESTAMP);
            stmt.execute();
            con.close();
      
            
             
      } catch (URISyntaxException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    } catch (SQLException e) {
         PrintWriter out = response.getWriter();
         out.println("{ Something went wrong }");
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
         PrintWriter out = response.getWriter();
         out.println("{ Class not found.}");
        e.printStackTrace();
    }
      
   }

}