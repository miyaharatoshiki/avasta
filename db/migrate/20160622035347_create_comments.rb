class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :picture_id
      t.string :user_name
      t.text :comment_body
      t.datetime :comment_time

      t.timestamps null: false
    end
  end
end
