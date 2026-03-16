window.BENCHMARK_DATA = {
  "lastUpdate": 1773665785039,
  "repoUrl": "https://github.com/craigraw/UltrafastSecp256k1",
  "entries": {
    "Perf Regression Gate": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d34e9260b5e5e349d120ccc6bb51dd2f07a395f0",
          "message": "ci(deps): bump actions/setup-python from 5.6.0 to 6.2.0 (#149)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python) from 5.6.0 to 6.2.0.\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/v5.6.0...a309ff8b426b58ec0e2a45f0f869d46889d02405)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-python\n  dependency-version: 6.2.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-16T15:57:33+04:00",
          "tree_id": "3f520e9a4cd1ecf80f4023ae0236e261b03e67aa",
          "url": "https://github.com/craigraw/UltrafastSecp256k1/commit/d34e9260b5e5e349d120ccc6bb51dd2f07a395f0"
        },
        "date": 1773665784104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1084.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1300.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7627.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32223,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 31381.1,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34972.4,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1307.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 226,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 134.4,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 177.6,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 242.1,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2174.3,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 185,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 140.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10459.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 65416.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37016.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 12541.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8284,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48037.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37544.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39195.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 143722.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 35930.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 586476,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36654.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3796465.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 59319.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 140410,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 561832.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2266171,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2608.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17186.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 38093.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 132.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 395.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 270.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 261.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 23120.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 77654.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19567,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 58814.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19182.2,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 449.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 445.2,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 445.1,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10448.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10312.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 46779.4,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11053.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 963.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40054.5,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 39771.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 15677.4,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19887.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1376.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139747.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160390.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160692.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 46912.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 65594.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1168.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2782.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1216.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 129,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 227.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34386.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16157.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19033.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 33277.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3403,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20840.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 36916,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392896.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416187.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 369081.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 60955.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 40778.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 39208.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 79108.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 103174.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 23550888.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4620213.4,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}