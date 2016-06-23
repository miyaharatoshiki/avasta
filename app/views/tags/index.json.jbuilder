json.array!(@tags) do |tag|
  json.extract! tag, :id, :tag_id, :tag_name
  json.url tag_url(tag, format: :json)
end
