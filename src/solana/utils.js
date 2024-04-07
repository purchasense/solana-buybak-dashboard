import {Keypair} from '@solana/web3.js';

export const PAYER_KEYPAIR_PATH = require('./config/my-keypair.json');

/**
 * @private
 */
async function getConfig(): Promise<any> {
  const config = {
    json_rpc_url: "https://api.devnet.solana.com",
    websocket_url: "",
    keypair_path: "config/my-keypair.json",
  };
  return config;
}

/**
 * Load and parse the Solana CLI config file to determine which RPC url to use
 */
export async function getRpcUrl(): Promise<string> {
  try {
    const config = await getConfig();
    if (!config.json_rpc_url) throw new Error('Missing RPC URL');
    return config.json_rpc_url;
  } catch (err) {
    console.warn(
      'Failed to read RPC url from CLI config file, falling back to localhost',
    );
    return 'https://api.devnet.solana.com';
  }
}

/**
 * Load and parse the Solana CLI config file to determine which payer to use
 */
export async function getPayer(): Promise<Keypair> {
  try {
    return await createKeypairFromJSON(PAYER_KEYPAIR_PATH);
  } catch (err) {
    console.warn(
      'Failed to create keypair from CLI config file, falling back to new random keypair',
    );
    return Keypair.generate();
  }
}

/**
 * Create a Keypair from a secret key stored in file as bytes' array
export async function createKeypairFromFile(
  filePath: string,
): Promise<Keypair> {
  const secretKeyString = await fs.readFile(filePath, {encoding: 'utf8'});
  const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
  return Keypair.fromSecretKey(secretKey);
}
 */


/**
 * Create a Keypair from a secret key stored in file as bytes' array
 */
export async function createKeypairFromJSON(
  secretKeyString
): Promise<Keypair> {
  // const secretKeyString = await fs.readFile(filePath, {encoding: 'utf8'});
  // TMD console.log( secretKeyString);
  const secretKey = Uint8Array.from((secretKeyString));
  // TMD console.log( {secretKey});
  return Keypair.fromSecretKey(secretKey);
}
