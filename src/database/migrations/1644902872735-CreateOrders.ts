import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1644902872735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "user_id",
              type: "uuid"
            },
          ],
          foreignKeys: [
            {
              columnNames: ["user_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "users"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }

}
