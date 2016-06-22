class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_number
      t.string :user_name
      t.string :user_pass
      t.string :user_place
      t.string :user_circle
      t.integer :user_year

      t.timestamps null: false
    end
  end
end
