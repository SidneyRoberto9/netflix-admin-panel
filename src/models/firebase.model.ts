export interface StorageProps {
  [x: string]: any;
  app: App;
  _delegate: Delegate;
}

export interface Delegate {
  app: App;
  _authProvider: AuthProvider;
  _appCheckProvider: AppCheckProvider;
  _pool: Pool;
  _firebaseVersion: string;
  _bucket: Bucket;
  _host: string;
  _appId: null;
  _deleted: boolean;
  _maxOperationRetryTime: number;
  _maxUploadRetryTime: number;
  _requests: Pool;
}

export interface AppCheckProvider {
  name: string;
  container: Container;
  component: AppCheckProviderComponent;
  instances: Pool;
  instancesDeferred: Pool;
  instancesOptions: Pool;
  onInitCallbacks: Pool;
}

export interface AppCheckProviderComponent {
  name: string;
  type: string;
  multipleInstances: boolean;
  serviceProps: Pool;
  instantiationMode: string;
  onInstanceCreated: null;
}

export interface Pool {}

export interface Container {
  name: string;
  providers: Pool;
}

export interface AuthProvider {
  name: string;
  container: Container;
  component: AuthProviderComponent;
  instances: Pool;
  instancesDeferred: Pool;
  instancesOptions: Pool;
  onInitCallbacks: Pool;
}

export interface AuthProviderComponent {
  name: string;
  multipleInstances: boolean;
  instantiationMode: string;
  type: string;
}

export interface Bucket {
  bucket: string;
  path_: string;
}

export interface App {
  name: string;
  automaticDataCollectionEnabled: boolean;
  options: Options;
}

export interface Options {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
