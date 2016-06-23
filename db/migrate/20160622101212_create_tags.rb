class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :tag_id
      t.string :tag_name

      t.timestamps null: false
    end
  end
end
