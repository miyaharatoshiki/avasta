class Picture < ActiveRecord::Base
has_many :comments
mount_uploader :picture_data, PictureUploader
end
