import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdersGames1644903144468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders_games",

          columns: [
            {
              name: "order_id",
              type: "uuid",
            },
            {
              name: "game_id",
              type: "uuid",
            }
          ],
          foreignKeys: [
            {
              columnNames: ["order_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "orders"
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
      await queryRunner.dropTable("orders_games")
    }

}
