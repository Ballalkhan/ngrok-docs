<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
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
}
