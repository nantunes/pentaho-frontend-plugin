#Pentaho Frontend Plugin Example

Example to show how frontend plugins can be developed independently of the dev enviroment, toolkits or frameworks.

Code in ```src``` and ```specs``` is from [brunoskonrad/angular-es2015](https://github.com/brunoskonrad/angular-es2015).

##How to use

1. ```npm install```
2. ```npm run build```
3. ```npm pack```
4. Copy ```pentaho-frontend-plugin-example-1.0.0.tgz``` to ```system/karaf/deploy``` folder.

###Note

For now this is just a _proof of concept_, the [pentaho-requirejs-osgi-manager](https://github.com/pentaho/pentaho-osgi-bundles/tree/master/pentaho-requirejs-osgi-manager) doesn't yet support multiple ```package.json``` per bundle.

This repo serves to backup a current RFC document regarding Pentaho’s frontend package definition format.
