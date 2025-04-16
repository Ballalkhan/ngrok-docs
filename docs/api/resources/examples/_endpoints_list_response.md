<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-16T10:07:26Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2vo4M8oVsnSmPcwbwzcNtGYFpjL",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vo4M8oVsnSmPcwbwzcNtGYFpjL"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vo4MmIDcR2y4rclXKXDfieQRtI",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-04-16T10:07:26Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2vo4MmIDcR2y4rclXKXDfieQRtI",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-16T10:07:24Z",
      "hostport": "95a5963e66d1.ngrok.paid:443",
      "id": "ep_2vo4MUI0Vx5460NX9KnCEebgfOV",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2vo4K1pdoPogDmcHHiQmUdxDFyW",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://95a5963e66d1.ngrok.paid",
      "tunnel": {
        "id": "tn_2vo4MUI0Vx5460NX9KnCEebgfOV",
        "uri": "https://api.ngrok.com/tunnels/tn_2vo4MUI0Vx5460NX9KnCEebgfOV"
      },
      "tunnel_session": {
        "id": "ts_2vo4MQ1HmPn3LYQgMdoK1YdaK6j",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2vo4MQ1HmPn3LYQgMdoK1YdaK6j"
      },
      "type": "ephemeral",
      "updated_at": "2025-04-16T10:07:24Z",
      "upstream_url": "http://localhost:80",
      "url": "https://95a5963e66d1.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-16T10:07:21Z",
      "domain": {
        "id": "rd_2vo4M8oVsnSmPcwbwzcNtGYFpjL",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vo4M8oVsnSmPcwbwzcNtGYFpjL"
      },
      "edge": {
        "id": "edgtls_2vo4M2TPrMOX0LCZnlyBkzXH6y7",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2vo4M2TPrMOX0LCZnlyBkzXH6y7"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vo4M3glSbjsjw1UHVkbPUUjRNx",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-04-16T10:07:21Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
