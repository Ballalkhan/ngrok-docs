<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vo4NSODUfE70w8B9vGabKVgUqB","ipp_2vo4NVPAk4cfBmDHXOkOLmUFKWj"]}' \
https://api.ngrok.com/edges/tls/edgtls_2vo4NTPyRE17Z3rXLi55hOwNueA/ip_restriction
