class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.integer :picture_id
      t.string :picture_title
      t.integer :user_id
      t.string :picture_data
      t.text :picture_comment
      t.integer :picture_tag1_id
      t.integer :picture_tag2_id
      t.integer :picture_tag3_id
      t.datetime :picture_time

      t.timestamps null: false
    end
  end
end
