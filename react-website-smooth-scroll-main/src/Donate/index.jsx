import React from 'react'
import index from '../pages/index'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './DonateElements'

const Donate = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Khwahish</Icon>
          <FormContent>
            <Form action={index}>
              <FormH1>You are donating to : Khwahish Foundation</FormH1>
              <FormLabel htmlFor='for'>How much books you want to Donate</FormLabel>
                <FormInput htmlFor='number' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit' >Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default  Donate


/*<div className="greennature-payment-lightbox-overlay" id="greennature-payment-lightbox-overlay"></div>
<div className="greennature-payment-lightbox-container" id="greennature-payment-lightbox-container">
    <div className="greennature-payment-lightbox-inner">
        <form className="greennature-payment-form" id="greennature-payment-form" >
            <h3 className="greennature-payment-lightbox-title">
<span className="greennature-head">You are donating to :</span>
<span className="greennature-tail">Greennature Foundation</span>
</h3>

            <div className="greennature-payment-amount">
                <div className="greennature-payment-amount-head">How much would you like to donate?</div>
                <a className="greennature-payment-price-preset greennature-active" data-val="10">$10</a>
                <a className="greennature-payment-price-preset" data-val="20">$20</a>
                <a className="greennature-payment-price-preset" data-val="30">$30</a>
                <input className="greennature-payment-price-fill" type="text" placeholder="Or Your Amount(USD)" />
                <input className="greennature-payment-price" type="hidden" name="amount" value="10" />

                <input class="greennature-payment-price" type="hidden" name="a3" value="10">
            </div>

            <div class="greennature-paypal-attribute">
                <span class="greennature-head">Would you like to make regular donations?</span>
                <span class="greennature-subhead">I would like to make </span>
                <select name="t3" class="greennature-recurring-option">
                    <option value="0">one time</option>
                    <option value="W">weekly</option>
                    <option value="M">monthly</option>
                    <option value="Y">yearly</option>
                </select>
                <span class="greennature-subhead">donation(s)</span>
                <input type="hidden" name="p3" value="1" />
                <div class="greennature-recurring-time-wrapper">
                    <span class="greennature-subhead">How many times would you like this to recur? (including this payment) *</span>
                    <select name="srt" class="greennature-recurring-option">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <input type="hidden" name="cmd" value="_xclick">
                <input type="hidden" name="bn" value="PP-BuyNowBF">
                <input type="hidden" name="src" value="1">
                <input type="hidden" name="sra" value="1">
            </div>

            <div class="greennature-form-fields">
                <div class="six columns">
                    <div class="columns-wrap greennature-left">
                        <span class="greennature-head">Name *</span>
                        <input class="greennature-require" type="text" name="name">
                    </div>
                </div>
                <div class="six columns">
                    <div class="columns-wrap greennature-right">
                        <span class="greennature-head">Last Name *</span>
                        <input class="greennature-require" type="text" name="last-name">
                    </div>
                </div>
                <div class="clear"></div>
                <div class="six columns">
                    <div class="columns-wrap greennature-left">
                        <span class="greennature-head">Email *</span>
                        <input class="greennature-require greennature-email" type="text" name="email">
                    </div>
                </div>
                <div class="six columns">
                    <div class="columns-wrap greennature-right">
                        <span class="greennature-head">Phone</span>
                        <input type="text" name="phone">
                    </div>
                </div>
                <div class="clear"></div>
                <div class="six columns">
                    <div class="columns-wrap greennature-left">
                        <span class="greennature-head">Address</span>
                        <textarea name="address"></textarea>
                    </div>
                </div>
                <div class="six columns">
                    <div class="columns-wrap greennature-right">
                        <span class="greennature-head">Additional Note</span>
                        <textarea name="additional-note"></textarea>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="greennature-payment-method">
                <img class="greennature-active" src="images/paypal.png" alt="paypal" /><img src="images/stripe.png" alt="stripe" />
                <input type="hidden" name="payment-method" value="paypal" /> </div>
            <div class="greennature-message"></div>
            <div class="greennature-loading">Loading...</div>
            <input type="submit" value="Donate Now" />
        </form>
    </div>
</div>
</div>*/
