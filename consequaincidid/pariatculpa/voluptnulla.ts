
const {GameServerConfigsServiceClient} = require('@google-cloud/game-servers');

const client = new GameServerConfigsServiceClient();

async function callSetActiveGame() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'Your Google Cloud Project ID';
  // const deploymentId = 'A unique ID for the Game Server Deployment';
  // const configId = 'A unique ID for the Game Server Config';
  // const realmId = 'A unique ID for the Game Server Realm';
  // const gameServerId = 'A unique ID for the Game Server';
  // const game = {}
  const request = {
    configId,
    realmId,
    gameServerId,
    game,
  };
  const [operation] = await client.setActiveGameServerConfig(request);
  const results = await operation.promise();
  console.log(results);
}

callSetActiveGame();


