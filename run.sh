export CONTENT1_PASSWORD=''
export CONTENT1_USERNAME=''

export NIGHTWATCH_ENV='chromeHeadless_docker_setup'

echo 'Getting the package from git'
echo '========================================='

cd /Home/test-folder/
echo 'cloning folder ========================'
git clone https://github.com/aaron-goshine/e-test.git

cd e-test
echo 'inside the folder ========================'
npm install

npm run test
