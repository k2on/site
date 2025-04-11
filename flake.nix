{
  description = "NextJS Template";
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
      pname = "zapp"; # Replace with your app name
      version = "0.1.0";
      
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_20
          pnpm_9 # Or pnpm_8 if you're using an older version
        ];
        shellHook = ''
          #!/usr/bin/env bash
        '';
      };
      
      packages.default = pkgs.stdenv.mkDerivation (finalAttrs: {
        inherit pname version;
        src = ./.;
        
        nativeBuildInputs = with pkgs; [
          nodejs_20
          pnpm_9.configHook # Use the config hook to set up the environment
        ];
        
        # Use fetchDeps to create a fixed-output derivation for dependencies
        pnpmDeps = pkgs.pnpm_9.fetchDeps {
          inherit (finalAttrs) pname version src;
          # Leave hash empty for the first build
          # After the first build fails, it will show the correct hash to use
          hash = "sha256-96xAIbHfpRqJMktx7ra7yAHENqUGNw4/CasP737M0ug=";
        };
        
        # Build command - adjust based on your package.json scripts
        buildPhase = ''
          # Run your build command from package.json
          pnpm run build
        '';
        
        # Install phase
        installPhase = ''
          mkdir -p $out/bin
          mkdir -p $out/lib/node_modules/${pname}
          
          # Copy the built app and necessary files
          cp -r ./.next $out/lib/node_modules/${pname}/
          cp -r ./public $out/lib/node_modules/${pname}/ || true
          cp ./package.json $out/lib/node_modules/${pname}/
          cp ./next.config.js $out/lib/node_modules/${pname}/ || true
          
          # Create executable wrapper script
          cat > $out/bin/${pname} <<EOF
          #!/bin/sh
          cd $out/lib/node_modules/${pname}
          exec ${pkgs.nodejs_20}/bin/node node_modules/next/dist/bin/next start
          EOF
          
          chmod +x $out/bin/${pname}
        '';
      });
    });
}
