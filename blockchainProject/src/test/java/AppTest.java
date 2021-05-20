
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Timestamp;

import com.blockchain.ApiGetMessageServlet;

/**
 * Unit test for simple App.
 */
class AppTest {
    StringWriter stringWriter = new StringWriter();
    ApiGetMessageServlet s = new ApiGetMessageServlet();
    private PrintWriter pw = new PrintWriter(stringWriter);
    
    @Test
    void lastPrice() {
        s.lastPrice(pw);
        pw.flush();
        assertTrue(stringWriter.toString().contains("\"error\": \"Not enough time passed\""));
    }
    @Test
    void insertUSD() {
        try {
            s.insertUSD(-1,pw);
            pw.flush();
         } catch(Exception e) {
            fail("Should not have thrown any exception");
         }
    }
    @Test
    void getLastTime(){
        Timestamp ts = s.getLastTime(pw);
        assertTrue(ts.before(new Timestamp(System.currentTimeMillis())) );

    }
}
