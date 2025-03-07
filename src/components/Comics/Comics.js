import React from 'react';
import { Link } from 'react-router-dom';
import theHip_HopRules_iThinkVeryDeeply1 from './../../comic-strips/i_think_very_deeply_1-2_with_phones_and_windows_transparent.svg';
import theHip_HopRules_iThinkVeryDeeply2 from './../../comic-strips/i_think_very_deeply_2-2_with_phones_and_windows_transparent.svg';
import './Comics.css';

const Comics = props => {
  return (
    <div>
      <div>
        <img src={ theHip_HopRules_iThinkVeryDeeply1 } className="cartoon" alt="comic strip: I Think Very Deeply 1 of 2" />
        <img src={ theHip_HopRules_iThinkVeryDeeply2 } className="cartoon" alt="comic strip: I Think Very Deeply 2 of 2" />
        <h3>I Think Very Deeply</h3>
        <h5>This comic was inspired by this <Link to={{ pathname: '/playlist' }}>Playlist</Link></h5>
        <h4>Hip-Hop Rule #5050</h4>
      </div>
      <div>
        <h3>Support More Comics</h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="ZE8S7D5HD3V5J" />
          <table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="" />
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                	<option value="nickelodeon">nickelodeon : $5.00 USD - monthly</option>
                	<option value="deuce">deuce : $2.00 USD - monthly</option>
                	<option value="one">one : $1.00 USD - monthly</option>
                </select>
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <h3>Subscribe To Support More Comics</h3>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        	<input type="hidden" name="cmd" value="_s-xclick" />
        	<input type="hidden" name="hosted_button_id" value="S8MZ7T5LD8S7A" />
        	<table>
        		<tr>
        			<td>
        				<input type="hidden" name="on0" value="One Time" />One Time
        			</td>
        		</tr>
        		<tr>
        			<td>
        				<select name="os0">
        					<option value="nickelodeon">nickelodeon $5.00 USD</option>
        					<option value="deuce">deuce $2.00 USD</option>
        					<option value="one">one $1.00 USD</option>
        				</select>
        			</td>
        		</tr>
        	</table>
        		<input type="hidden" name="currency_code" value="USD" />
        		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        	<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className="disclaimer">
        <p>The name, <a href="https://en.wikipedia.org/wiki/Nickelodeon_(movie_theater)" alt="link to wikipedia page about nickelodeon movie theaters" target="_blank" rel="noopener noreferrer">nickelodeon</a>, is in reference to the old 5 cent movie theaters and has no reference or affiliation to the cable channel.</p>
      </div>


    </div>
  )
}

export default Comics;
