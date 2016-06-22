class Picture < ActiveRecord::Base
mount_uploader :picture_data, PictureUploader
end
