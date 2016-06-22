json.array!(@pictures) do |picture|
  json.extract! picture, :id, :picture_id, :picture_title, :user_id, :picture_data, :picture_comment, :picture_tag1_id, :picture_tag2_id, :picture_tag3_id, :picture_time
  json.url picture_url(picture, format: :json)
end
