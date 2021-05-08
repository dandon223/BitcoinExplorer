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
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ApiGetMessageServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;

  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("application/json");
      PrintWriter out = response.getWriter();
      
      Timestamp last = getLastTime(out);
      Timestamp now = new Timestamp(System.currentTimeMillis());
      if((now.getTime() - last.getTime())> 15*60*1000 ){
        double money = getLastUSD(out);
        
        if(money!=-1){
            out.println("{ \"BTC/USD\": \""+money+"\" }");
            insertUSD(money, out);
        }
      }else{
          out.println("{ \"error\": \"Not enough time passed\"}");
      }
   }
   void insertUSD(double money,PrintWriter out){
       try {
        Connection con = null;
        Class.forName("com.mysql.jdbc.Driver"); 
        con = DriverManager.getConnection("jdbc:mysql://192.168.194.200:3306/PIK?"
            + "useLegacyDatetimeCode=false&serverTimezone=UTC&" + "user=root&password=nowehaslo");
        PreparedStatement stmt = con.prepareStatement("INSERT INTO USDBTC (USD) VALUES(?)");
        stmt.setDouble(1,money);
        stmt.execute();
        con.close();
    } catch (SQLException e) {
        out.println("{\"error\": \"SQLException in getLastTime\" }");
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        out.println("{\"error\": \"ClassNotFoundException in getLastTime\" }");
        e.printStackTrace();
    }
   }
   double getLastUSD(PrintWriter out){
        HttpClient httpClient = HttpClient.newBuilder().build();
        try {
            HttpRequest request = HttpRequest.newBuilder(new URI("https://rest.coinapi.io/v1/exchangerate/BTC/USD"))
                .headers("X-CoinAPI-Key", "3707CA9C-9195-4C2C-925D-64E49EA413B6").GET().build();
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            String str = "[" + response.body() + "]";
            JSONArray array = new JSONArray(str);
            JSONObject object = array.getJSONObject(0);
            return object.getDouble("rate");
        } catch(JSONException e){
            out.println("{\"error\": \"JSONException in getLastUSD\" }");
            e.printStackTrace();
        } catch (URISyntaxException e) {
            out.println("{\"error\": \"URISyntaxException in getLastUSD\" }");
            e.printStackTrace();
        } catch (IOException e) {
            out.println("{\"error\": \"IOException in getLastUSD\" }");
            e.printStackTrace();
        } catch (InterruptedException e) {
            out.println("{\"error\": \"InterruptedException in getLastUSD\" }");
            e.printStackTrace();
        };
            
       return -1;
   }
   Timestamp getLastTime(PrintWriter out){
    try {
        Connection con = null;
        Class.forName("com.mysql.jdbc.Driver"); 
        con = DriverManager.getConnection("jdbc:mysql://192.168.194.200:3306/PIK?"
            + "useLegacyDatetimeCode=false&serverTimezone=UTC&" + "user=root&password=nowehaslo");
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT time FROM USDBTC ORDER BY time DESC LIMIT 1");
        rs.next();
        Timestamp last = Timestamp.valueOf(rs.getString("time"));
        con.close();
        return last;
    } catch (SQLException e) {
        out.println("{\"error\": \"SQLException in getLastTime\" }");
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        out.println("{\"error\": \"ClassNotFoundException in getLastTime\" }");
        e.printStackTrace();
    }
    return null;
   }

}