json.array!(@users) do |user|
  json.extract! user, :id, :user_number, :user_name, :user_pass, :user_place, :user_circle, :user_year
  json.url user_url(user, format: :json)
end
