import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenreGameRelation1644900721396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "games_genres",

          columns: [
            {
              name: "genre_id",
              type: "uuid",
            },
            {
              name: "game_id",
              type: "uuid",
            }
          ],
          foreignKeys: [
            {
              columnNames: ["genre_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "genres"
            },
            {
              columnNames: ["game_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "games"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres");
    }
}
