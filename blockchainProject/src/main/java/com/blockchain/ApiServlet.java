package com.blockchain;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ApiServlet extends HttpServlet {
  
  private static final long serialVersionUID = 1L;

  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      response.setContentType("text/html");

      PrintWriter out = response.getWriter();
      String str= "./api works. Try <a href='./api/getMessage'>./api/getMessage</a>";
      out.println(str);
      str= "login tests Try <a href='./api/LoginClass'>here</a>";
      out.println(str);
   }

}