# Girlfriend Texter!

Hi! Here is your guide on how to integrate Twilio and AWS together to create an automated texting app to annoy your SO. Make sure you have an AWS Account.

We have the code and CloudFormation infrastructure already set up for you. All you have to do is make sure your Twilio account is set up.

# Set Up

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Start by cloning this Git repo

`git clone [this repo]`

## Set up your Twilio Account for SMS

Follow Instructions Here 
https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account

## Set-Up AWS CLI

Follow Instructions Here
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html

## Deploy the code to S3

Create a bucket in S3 like so using the command line from the root of the repo.
`aws s3api create-bucket --bucket [unique bucket name]`

Deploy your code to the S3 Bucket
`aws s3api put-object --bucket [bucket name] --key GirlfriendTexterCode --body src/code.zip`


## Deploy CloudFormation

Make sure you have a Twilio account set up by this point. Have your SID, Auth Key, and Twilio phone number handy.

Run this line to deploy the AWS infrastructure code to CloudFormation.
`aws cloudformation create-stack --stack-name GirlfriendTesterStack --template-body file://cloudformation.yaml --parameters TwilioAccountSID=[insert],TwilioAuthToken=[insert],SourcePhoneNumber=[insert],DestinationPhoneNumber=[insert]`


# Enjoy the fun

