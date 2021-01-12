const { CognitoIdentityServiceProvider } = require('aws-sdk')
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider()
const USER_POOL_ID = 'ap-northeast-1_QoMBGPMuW'
const stripe = require('stripe')(
  'sk_test_51I33YiBgjdEbBsTXdaNj2ljp6NLARisGQRwiGNPaFRUQbAaK3WWuIBRwGxvCDZQaAa1yPHytdtQ1msiERR7qqe3l00WEOS6YuX'
)

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  }
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise()
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === 'email') {
      return attr.Value
    }
  })
  return email
}

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, address, token } = event.arguments.input
    const { username } = event.identity.claims
    // auth
    const email = await getUserEmail(event)

    await stripe.charges.create({
      amount: total * 100,
      currency: 'usd',
      source: token,
      description: `Order ${new Date()} by ${username} with ${email} email`,
    })
    return { id, cart, total, address, username, email }
  } catch (err) {
    throw new Error(err)
  }
}
