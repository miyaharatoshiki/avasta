json.array!(@comments) do |comment|
  json.extract! comment, :id, :picture_id, :user_name, :comment_body, :comment_time
  json.url comment_url(comment, format: :json)
end
